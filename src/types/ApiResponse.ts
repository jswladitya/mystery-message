//not actual response but kis type se hamara response dikhna chahiye
import {Message} from '@/model/User'

export interface ApiResponse{
    // kyuki messages ek sath deal kar raha hu islie me message interface jo mene banaya tha wo use karunga
    success : boolean;
    message: string;
    isAcceptingMessages?: boolean
    messages?: Array<Message>
}