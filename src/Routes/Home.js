import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


const GET_ALLPOST = gql`
    query{
        allPosts{
        title
        subtitle
        
        }
    }
`;


const Home = () => {
    const baba = useQuery(GET_ALLPOST);
    console.log(baba);
    return(
        <div>
            <h3>Home</h3>
        </div>
    )
};

export default Home;
