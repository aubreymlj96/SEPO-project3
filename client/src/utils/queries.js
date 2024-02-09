import { gpl } from '@apollo/client';

export const GET_ME = gpl`
    {
        me{
            _id
            username
            email
            savedEvents{
                _id
                sport
                description
                participants
                dateOfEvent
            }
        }
    }
`;