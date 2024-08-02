import { parseISO,formatDistanceToNow } from "date-fns";

export const TimeAgo = ({timestamp}) => {
    let timeago = '';
    if(timestamp){
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeago = `${timePeriod} ago`;
    }
  return (
   
       <span className='timestamp'  title={timeago}>
        &nbsp; <i>{timeago}</i>
       </span>
    
  )
}
