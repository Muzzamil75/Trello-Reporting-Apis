/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import queryString from 'query-string';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { TextStrings, applyColor } from './TextStrings';
import { checkDateRange, DateIsGreater } from '../../utils/Helpers/CalculateDateExistance';
import { API_KEY, TOKEN } from '../../utils/constants';

const styles = {
  grid: {
    width: "20%"
  }
};
class Reporting extends Component {
  constructor(props) {
    const { location: { search } } = props;
    const parsed = queryString.parse(search);
    super(props);
    this.state = {
      allActions: null,
      boardId: parsed.boardId,
      memberId: parsed.memberId,
      filteredActions: null,
      startDate: null,
      endDate: null,
      actionsBtwDays: [],
      triggered: false,
      isPeriodSelected: false,
      memberName: '',
      boardName: ''
    }
  }
  // Only Actions API
  fetchActionsAgainstMemberId = (memberId, boardId) => {
    fetch(`https://api.trello.com/1/members/${memberId}/actions?key=${API_KEY}&token=${TOKEN}&fields=all`)
      .then(res => res.json())
      .then((data) => {
        let arr = []
        // getting the actions of the specific selected BOARD through query params
        data.forEach(el => {
          if (el.data.board.id === boardId) {
            arr.push(el)
          }
        })
        // ALL the actions of the board 
        this.setState({ allActions: arr }, () => {
          this.filterTheActions();
        })
      })
      .catch(console.log)
  };

  // fetchCardActionsAgainstCardId = (cardId) => {
  //   fetch(`https://api.trello.com/1/cards/${cardId}/actions?key=${API_KEY}&token=${TOKEN}&filter=all`)
  //     .then(res => res.json())
  //     .then((data) => {
  //       let arr = [];
  //       let i = 0;
  //       arr.push(data)

  //       // data.forEach(el => {
  //       //   console.log(`${el.data.card.name} is moved from ${el.data.listBefore.name} to  ${el.data.listAfter.name}`)
  //       // })
  //       // console.log('aaaa type',data)
  //       //   for ( i = data.length ; i  >= 0 ; i-- ){

  //       //   }
  //       this.setState({ cardActions: arr }, () => console.log('cardActionssssssssssssss', this.state.cardActions))

  //       // let reversedArr = data.reverse();
  //       // console.log('bbbb',reversedArr)


  //       // this.setState({ allActions: arr }, () => {
  //       //   this.filterTheActions();
  //       // })
  //     })
  //     .catch(console.log)
  // };

  componentWillUnmount() {
    this.setState({ allActions: [] })
  }

  // check if date exists between the two data and returned the existant data
  checkDateRange = (startDate, endDate, data) => {
    var dateFrom = new Date(startDate.replace(/"/g, ''));
    var dateTo = new Date(endDate.replace(/"/g, ''));
    var from = new Date(
      dateFrom.getFullYear(),
      dateFrom.getMonth() - 1,
      dateFrom.getDate(),
    );
    var to = new Date(
      dateTo.getFullYear(),
      dateTo.getMonth() - 1,
      dateTo.getDate(),
    );
    var actionsBtwDays = [];
    data.forEach(el => {
      let dateCheck = new Date(el.updatedTime);
      let check = new Date(
        dateCheck.getFullYear(),
        dateCheck.getMonth() - 1,
        dateCheck.getDate(),
      );
      if (check >= from && check <= to) {
        actionsBtwDays.push(el)
      }
    })
    this.setState({ actionsBtwDays, triggered: true });
  };

  handleFilterBtn = () => {
    const { startDate, endDate } = this.state
    if (!!startDate && !!endDate) {
      this.setState({ isPeriodSelected: true })
      this.checkDateRange(JSON.stringify(this.state.startDate), JSON.stringify(this.state.endDate), this.state.filteredActions)
    }
    else {
      alert('Select the period range')
      this.setState({ isPeriodSelected: false })
    }
  };

  filterTheActions = () => {
    let actions = [...this.state.allActions];
    let filteredActions = [];
    console.log('actionsss', actions)
    this.setState({ memberName: actions[0].memberCreator.username, boardName: actions[0].data.board.name })

    // making a specific array of objects from the ALLactions array
    actions.forEach(ele => {
      let obj = {}
      if (ele.type === 'updateCard') {
        if (ele.data.old.name) {
          obj.type = 'cardRenamed';
          obj.oldCardName = ele.data.old.name;
          obj.cardName = ele.data.card.name;
          obj.listId = ele.data.list.id;
          obj.listName = ele.data.list.name;
          obj.updatedTime = ele.date;
          filteredActions.push(obj)
        }
        else if (ele.data.old.due) {
          obj.type = 'dueDateChanged';
          obj.oldDueDate = ele.data.old.due;
          obj.newDueDate = ele.data.card.due;
          obj.cardId = ele.data.card.id;
          obj.cardName = ele.data.list.name;
          obj.listName = ele.data.list.name;
          obj.updatedTime = ele.date;
          filteredActions.push(obj)
        }
        else if (ele.data.listBefore) {
          obj.type = 'cardMoved';
          obj.before = ele.data.listBefore.name;
          obj.after = ele.data.listAfter.name;
          obj.cardName = ele.data.card.name;
          obj.cardId = ele.data.card.id;
          obj.updatedTime = ele.date;

          actions.filter((item) => {
            // getting the exact card by id and finding its creation date
            if (item.data.card ?.id === ele.data.card.id && item.type === 'createCard') {
              obj.creationTime = item.date;
            }
            // getting the time of stay within the list // TODO
            else if (item.data.card ?.id === ele.data.card.id && item.type === 'updateCard') {
              if (item.data.listAfter ?.id === ele.data.listBefore.id && DateIsGreater(ele.date,item.date)) {
                  obj.previousTime= item.date;
              }
            }
          })
          filteredActions.push(obj)
        }

      }
      if (ele.type === 'createCard') {
        obj.type = 'cardCreated';
        obj.cardName = ele.data.card.name;
        obj.cardId = ele.data.card.id;
        obj.listId = ele.data.list.id;
        obj.listName = ele.data.list.name;
        obj.updatedTime = ele.date;
        filteredActions.push(obj)
      }
      //Done
      else if (ele.type === 'createList') {
        obj.type = 'listCreated';
        obj.listId = ele.data.list.id;
        obj.listName = ele.data.list.name;
        obj.updatedTime = ele.date;
        filteredActions.push(obj)
      }
      else if (ele.type === 'updateList') {
        if (ele.data.list.closed) {
          obj.type = 'listClosed';
          obj.listName = ele.data.list.name;
          obj.updatedTime = ele.date;
          filteredActions.push(obj)
        }
        if (ele.data.old.name && !ele.data.list.closed) {
          obj.type = 'listRenamed';
          obj.listName = ele.data.list.name;
          obj.oldListName = ele.data.old.name;
          obj.listId = ele.data.list.id;
          obj.updatedTime = ele.date;
          filteredActions.push(obj)
        }
      }
      // else if (ele.type === "addMemberToBoard"){
      //   obj.type = 'memberAddedToBoard';
      //   obj.boardName = ele.data.board.name;
      //   obj.boardId = ele.data.board.id;
      //   obj.invitorName = ele.memberCreator.fullName;
      //   obj.invitorId = ele.memberCreator.id;
      //   obj.memberName = ele.member.fullName;
      //   obj.memberId = ele.member.id;
      //   obj.updatedTime = ele.date;
      //   filteredActions.push(obj)
      // }
      else if (ele.type === "addMemberToCard") {
        obj.type = 'memberAddedToCard';
        obj.cardName = ele.data.card.name;
        obj.cardId = ele.data.card.id;
        obj.assignedTo = ele.data.member.name;
        obj.assignedMemberId = ele.data.member.id;
        obj.taskAssigner = ele.memberCreator.fullName;
        obj.taskAssignerId = ele.memberCreator.id;
        obj.updatedTime = ele.date;
        filteredActions.push(obj)
      }
      // Done
      else if (ele.type === "removeMemberFromCard") {
        obj.type = 'memberRemovedFromCard';
        obj.cardName = ele.data.card.name;
        obj.cardId = ele.data.card.id;
        obj.memberName = ele.data.member.name;
        obj.memberId = ele.data.member.id;
        obj.deAllocatorName = ele.memberCreator.fullName;
        obj.deAllocatorId = ele.memberCreator.id;
        obj.updatedTime = ele.date;
        filteredActions.push(obj)
      }
      // Done
      else if (ele.type === "commentCard") {
        obj.type = 'cardCommented';
        obj.cardName = ele.data.card.name;
        obj.cardId = ele.data.card.id;
        obj.listName = ele.data.list.name;
        obj.listId = ele.data.list.id;
        obj.comment = ele.data.text;
        obj.commentorName = ele.memberCreator.fullName;
        obj.commentorId = ele.memberCreator.id;
        obj.updatedTime = ele.date;
        filteredActions.push(obj)
      }
    })
    console.log('to show', filteredActions)
    this.setState({ filteredActions })
  }
  componentDidMount() {
    this.fetchActionsAgainstMemberId(this.state.memberId, this.state.boardId)
  }
  render() {
    const { allActions, startDate, endDate, boardName, actionsBtwDays, triggered, isPeriodSelected, memberName } = this.state
    return (
      <div style={{ padding: 45 }}>
        <h1>All actions of {applyColor(memberName)} on Board {applyColor(boardName)}</h1>
        <ul className="nav luna-nav">
          {!!allActions && allActions.map((item, key) => {
            return (
              <li>{item.type}</li>
            )
          })}
        </ul>
        <hr />
        <h1>Filter</h1>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container justify="space-evenly">
            <div style={{ flexDirection: 'column' }}>
              <h1>From date</h1>
              <DatePicker
                keyboard
                placeholder="MM/DD/YYYY"
                format={"MM/DD/YYYY"}
                mask={value =>
                  value
                    ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                    : []
                }
                value={startDate}
                onChange={(e) => this.setState({ startDate: e })}
                disableOpenOnEnter
                animateYearScrolling={false}
                autoOk={true}
                clearable
              />
            </div>
            <div style={{ flexDirection: 'column' }}>
              <h1>To date</h1>
              <DatePicker
                keyboard
                placeholder="MM/DD/YYYY"
                format={"MM/DD/YYYY"}
                mask={value =>
                  value
                    ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                    : []
                }
                value={endDate}
                onChange={(e) => this.setState({ endDate: e })}
                disableOpenOnEnter
                animateYearScrolling={false}
                autoOk={true}
                clearable
              />
            </div>
          </Grid>
          <button
            style={{ background: '#f6a821', border: '1px solid #f6a821', marginTop: 20, width: '100px', height: '30px' }}
            onClick={this.handleFilterBtn}
          >
            Filter Report
            </button>
          {triggered && actionsBtwDays.length === 0 && isPeriodSelected && <h4>No data found</h4>}
          {!isPeriodSelected && triggered && 'Select a period First'}
          {actionsBtwDays.length > 0 && actionsBtwDays.map((item, key) => <TextStrings key={key} item={item} boardName={boardName} memberName={memberName} />)}
        </MuiPickersUtilsProvider>
      </div>
    )
  }
}


export default withStyles(styles)(Reporting);
