import { useDispatch} from "react-redux";
import { reactionsAdded } from "./postSlice";

const reactionEmoji = {
    like:'👍',
    dislike:'👎',
    clap:'👏',
    wow:'😮',
    heart:'❤️',
};

const Reaction = ({post}) => {

        const dispatch = useDispatch();

        const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) => {
            return (

                <button className='reactionButton'
                    key = {name}
                    type="button"
                    onClick={()=> dispatch(reactionsAdded({
                        id:post.id,
                        reaction:name
                    }))}
                >
                {emoji}{post.reactions[name]} 

                </button>
             )
        })
   return <div>{reactionButtons}</div>

}

export default Reaction