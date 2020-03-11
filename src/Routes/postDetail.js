import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_POST = gql`
    query getPost($id: String!) {
        getPost(id: $id){
            title
            subtitle
            content
        }
    }
`

export default () =>{
    const { id } = useParams();
    const { loading, data, error } = useQuery(GET_POST, {
        variables: { id }
    });
    return(
        <div>
            {loading ? "Loading..." : null}
            {!loading && data.getPost && (
                <>
                    <div>{data.getPost.title}</div>
                    <div>{data.getPost.subtitle}</div>
                    <div>{data.getPost.content}</div>
                </>
            )}
        </div>
    )
}

