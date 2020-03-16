import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Post from "../components/Post";
import Header from "../Layout/Header";
import Navigation from "../Layout/Navigation";


const GET_ALLPOST = gql`
    {
        allPosts{
            id
            title
            subtitle    
        }
    }
`;

export default () => {
    const { loading, data } = useQuery(GET_ALLPOST);
    console.log(data ? data.allPosts[0].title : null);
    return(
        <div>
            {loading && <div>Loading...</div>}
            {!loading && data.allPosts && (
                <div>
                    {data.allPosts.map(m => (
                        <Post key={m.id} id={m.id} title={m.title} subtitle={m.subtitle} />
                    ))}
                </div>
            )}
            <div>
                    <pre>{`
                        제발
                        오 된다 !!
                            부~탁해~~
                        개행좀요
                    `}</pre>
            </div>
        </div>
        
        
    )
};