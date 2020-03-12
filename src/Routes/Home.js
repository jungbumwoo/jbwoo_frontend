import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Post from "../components/Post";
import "./Home.css";

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
        <>
            <div className="nav"></div>
            <div className="portrait"></div>
            <div>
                {loading && <div>Loading...</div>}
                {!loading && data.allPosts && (
                    <div>
                        {data.allPosts.map(m => (
                            <Post key={m.id} id={m.id} title={m.title} subtitle={m.subtitle} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
};