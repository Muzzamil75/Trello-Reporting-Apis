/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { API_KEY, TOKEN } from '../../utils/constants';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardsData: {
                array: null,
                selectedBoardNo: null,
                selectedBoardId: null,
                selectedBoardName: null,
            },
            listData: {
                array: null
            },
            membersData: {
                array: null
            },
            cardsWithIds: [],
            taskCount: null
        };
    }
    // Fetching the boards
    fetchBoards = () => {
        fetch(`https://api.trello.com/1/members/me/boards?key=${API_KEY}&token=${TOKEN}`)
            .then(res => res.json())
            .then((boards) => {
                this.setState({
                    boardsData: {
                        ...this.state.boardsData,
                        array: boards,
                        selectedBoardId: boards[0].id,
                        selectedBoardName: boards[0].name
                    }
                })
                this.fetchListWithCardsAgainstBoardId(boards[0].id);
            })
            .catch(console.log)
    }
    // Done
    fetchListWithCardsAgainstBoardId = boardId => {
        fetch(`https://api.trello.com/1/boards/${boardId}/lists?cards=open&card_fields=all&filter=open&fields=all&key=${API_KEY}&token=${TOKEN}`)
            .then(res => res.json())
            .then((lists) => {
                // console.log(lists)
                this.setState({
                    listData: {
                        ...this.state.listData,
                        array: lists,
                    }
                })
            })
            .catch(console.log)
            .finally(() => this.calculation())
    };

    calculation = async () => {
        const arr = [];
        console.log('liiiiiiiiiiiiiiiiiiii data with ids -->', this.state.listData.array)

        // getting out required information from the list
        await this.state.listData.array && this.state.listData.array.forEach(ele => {
            let obj = {}
            obj.listId = ele.id;
            obj.listName = ele.name;
            if (ele.cards.length > 0) {
                obj.cards = ele.cards;
                // var cards=[];
                // 	ele.cards.forEach(card => {
                //     obj.idBoard = card.idBoard;
                // 		obj.cardId = card.id;
                // 		obj.dueDate = card.due;
                // 		obj.dueComplete = card.dueComplete;
                // 		obj.cardName= card.name;
                // 		obj.cardStatus= card.closed;
                // 		obj.dateLastActivity = card.dateLastActivity;
                //     obj.idMembers = card.idMembers;
                // 		obj.labels = card.labels;
                // 		cards.push(obj)
                // })
            }
            else {
                obj.cards = null
            }
            arr.push(obj);
        });
        this.setState({ cardsWithIds: arr });

        // TODO 
        // making array of cards count for each person
        let count = [];
        await this.state.membersData.array && this.state.membersData.array.forEach(person => {
            arr.forEach(list => {
                list.cards ?.forEach(singleCard => {
                    if (count.filter(ct => ct.id === singleCard).length) {
                        count.map(ct => {
                            if (ct.id === singleCard) {
                                ct.count++;
                            }
                        })
                    } else {
                        count.push({ count: 1, singleCard })
                    }

                })
            });
        })
        // console.log('checkkkkkkkkkkkkkkkkkk', count)
        this.setState({ taskCount: count })
        // console.log('mmmmmmmm',this.state.membersData.array)

        // let obj={}
        // this.state.membersData.array?.forEach(member=>{
        //     count.forEach(item=>{
        //         if(item.id===member.id){
        //              obj = {
        //                 ...this.state.membersData,
        //                 noOfCardsAssigned:item.count
        //             }
        //         }
        //         console.log(obj)
        //     })
        // })
        // // this.setState({membersData : {...this.state.membersData,cardsCount}})
        // console.log('Coiunt',count)
    };

    // TODO 
    // getTasks = ({ id, fullName, ...rest }) => {
    //     let task = this.state.taskCount.filter(el => {
    //         if (id === el.id) {
    //             return true;

    //         }
    //         return false
    //     })
    //     return task[0] ?.count || "0"
    // }

    fetchMembersOfBoard = (boardId) => {
        fetch(`https://api.trello.com/1/boards/${boardId}/members?key=${API_KEY}&token=${TOKEN}`)
            .then(res => res.json())
            .then((members) => {
                // console.log('Memerbers ->', members)
                this.setState({
                    membersData: {
                        ...this.state.membersData,
                        array: members,
                    }
                })
            })
            .catch(console.log)
    }
    UpdateDashboardSection = (key, boardName, boardId) => {
        this.fetchMembersOfBoard(boardId);
        this.fetchListWithCardsAgainstBoardId(boardId);
        this.setState({
            boardsData: {
                ...this.state.boardsData,
                selectedBoardName: boardName,
                selectedBoardNo: key,
                selectedBoardId: boardId
            }
        })
    }

    showReports = (item) => {
        let boardId = this.state.boardsData.selectedBoardId
        this.props.history.push({
            pathname: '/reports',
            search: `?boardId=${boardId}&memberId=${item.id}`,
        })
    };

    // totalCards =count=>{
    //     console.log('cccccccccccccccc',count)
    //     let cards;
    //      cards =count++;
    //      return cards
    // }

    componentDidMount() {
        this.fetchBoards();
    }
    render() {
        const { boardsData, listData, membersData, selectedBoardNo, count } = this.state;
        return (
            <div className="wrapper">
                <nav className="navbar navbar-expand-md navbar-default fixed-top">
                    <div className="navbar-header">
                        <div id="mobile-menu">
                            <div className="left-nav-toggle">
                                <a href="#">
                                    <i className="stroke-hamburgermenu"></i>
                                </a>
                            </div>
                        </div>
                        <a className="navbar-brand" href="index.html">
                            Muzzamil's
                      <span>v.1.4</span>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <div className="left-nav-toggle">
                            <a href="">
                                <i className="stroke-hamburgermenu"></i>
                            </a>
                        </div>
                        <form className="navbar-form mr-auto">
                            <input type="text" className="form-control" placeholder="Project Reporting Tool" />
                        </form>
                        <ul className="nav navbar-nav">

                            <li className="nav-item profil-link">
                                <a href="login.html">
                                    <span className="profile-address">origamiStudios</span>
                                    <img src="images/profile.jpg" className="rounded-circle" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <aside className="navigation">
                    <nav>
                        <ul className="nav luna-nav">
                            <li className="nav-category">
                                All Projects
                      </li>
                            {!!boardsData.array && boardsData.array.map((item, key) => {
                                return (
                                    <li className='in-active' data-toggle="collapse" key={key}>
                                        <a onClick={() => this.UpdateDashboardSection(key, item.name, item.id)}>{item.name}</a>
                                    </li>
                                )
                            })}

                            <li className="nav-info">
                                <i className="pe pe-7s-shield text-accent"></i>

                                <div className="m-t-xs">
                                    <span className="c-white">Trello Reporting Tool</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="view-header">
                                    <div className="header-icon">
                                        <i className="pe page-header-icon pe-7s-shield"></i>
                                    </div>
                                    <div className="header-title">
                                        <h3 className="m-b-xs">{boardsData.selectedBoardName}</h3>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            {!!listData.array && listData.array.map((item, key) => {
                                return (
                                    <div className="col-lg-2 col-xs-6" key={key}>
                                        <div className="panel panel-filled">
                                            <div className="panel-body">
                                                <h2 className="m-b-none">
                                                    {item.cards && item.cards.length} <span className="slight"></span>
                                                </h2>
                                                <div className="small">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="panel panel-filled">
                                    <div className="panel-body">
                                        <table className="table table-responsive-sm">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>No of Tasks Assigned</th>
                                                    <th>Reports</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!!membersData.array && membersData.array.map((item, key) => {
                                                    return (
                                                        <tr>
                                                            <td>{item.fullName}</td>
                                                            {/* <td>{this.getTasks(item)}</td> */}
                                                            <td><button
                                                                style={{ background: '#f6a821', border: '1px solid #f6a821', width: '100px', height: '30px' }}
                                                                onClick={() => this.showReports(item)}>Get Reports</button></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="panel panel-b-accent">
                                    <div className="panel-body text-center p-m">
                                        <h2 className="font-light">
                                            Total 43 Cards
                                  </h2>
                                        <div className="sparkline7 m-t-xs"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}