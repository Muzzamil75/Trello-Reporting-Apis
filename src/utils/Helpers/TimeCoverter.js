const TimeDifference = (started, ended) => {
  var a = new Date(started)
  var b = new Date(ended)
  var diff = Math.abs(a - b);
  return msToTime(diff)
}
const msToTime = (duration) => {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 30),
    months = Math.floor((duration / (1000 * 60 * 60 * 24 * 30)) % 12);
  if(months > 0){
    return `${months} months , ${days} days , ${hours} hours , ${minutes} minutes`
  }
  else if (days > 0){
    return `${days} day ${hours} hours and ${minutes} minutes`
  }
  else if (hours > 0){
    return `${hours} hours and ${minutes} minutes`
  }
  else if (minutes > 0){
    return `${minutes} minutes`
  }
}

export  { TimeDifference ,msToTime };