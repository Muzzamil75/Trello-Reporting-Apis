import React from 'react'
import { TimeDifference } from '../../utils/Helpers/TimeCoverter'

const TextStrings = ({ item, memberName }) => {
  const makeLocaleTimezone = time => {
    var time = new Date(time)
    return applyColor(time.toLocaleString())
  }

  const Time = (item) => {
   return DateColor(TimeDifference(item.hasOwnProperty("previousTime") ? item.previousTime : item.creationTime, item.updatedTime))
  }
  const renderString = item => {
    switch (item.type) {
      case 'cardCreated':
        return <h4>{memberName} created card  {applyColor(item.cardName)}  in  {applyColor(item.listName)} at {makeLocaleTimezone(item.updatedTime)}   </h4>;
        break;
      case 'listCreated':
        return <h4>{memberName} created list  {applyColor(item.listName)} </h4>;
        break;
      case 'cardRenamed':
        return <h4>{memberName} renamed the card from  {applyColor(item.oldCardName)}  to  {applyColor(item.cardName)}</h4>;
        break;
      case 'cardMoved':
        return <h4>{memberName} moved card {applyColor(item.cardName)} from {applyColor(item.before)} to {applyColor(item.after)} at {makeLocaleTimezone(item.updatedTime)} after {Time(item)}   </h4>;
        break;
      case 'memberAddedToCard':
        return <h4>{memberName} assigned {applyColor(item.cardName)} to {item.assignedTo} at {makeLocaleTimezone(item.updatedTime)} </h4>;
        break;
      case "memberRemovedFromCard":
        return <h4>{item.deAllocatorName} removed {applyColor(item.memberName)} from the card {item.cardName} at {makeLocaleTimezone(item.updatedTime)} </h4>;
        break;
      case "cardCommented":
        return <h4>{item.commentorName} commented on the card  {applyColor(item.cardName)} as '{applyColor(item.comment)}'</h4>;
        break;
      default:
        break
      // hellow
    }
  }

  return (
    <ul style={{ paddingTop: 0 }}>
      <li>{renderString(item)}</li>
    </ul>
  )
}

const DateColor = text  => {
 
  return <span style={{ color: 'rgb(64, 255, 105)' }}>{text}</span>
}


const applyColor = text => {
  return <span style={{ color: '#ffdf40' }}>{text}</span>
}

export { applyColor , TextStrings}