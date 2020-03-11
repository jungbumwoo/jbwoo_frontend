import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


const GET_ALLPOST = gql`
    {
        allPosts{
            title
            subtitle    
        }
    }
    
`;
const Home = () => {
    const { data } = useQuery(GET_ALLPOST);
    console.log(data ? data.allPosts[0].title : null);
    return(
        <div>afds</div>
    )
};

export default Home;
