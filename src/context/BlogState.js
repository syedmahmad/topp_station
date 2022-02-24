import React, { createContext, useReducer } from 'react';
import BlogReducer from '../reducers/BlogReducer';
import axios from 'axios'

const initialState = {
    blogs: null,
    error: null
}

export const BlogContext = createContext(initialState);

export const BlogProvider = ({ children }) => {
        const [state, dispatch] = useReducer(BlogReducer, initialState);

        async function getBlogs() {
            // This will use next js API getblogs inside // pages/api/getblogs...
            const data = await axios.get("/api/getblogs")
                .then(res => {
                    dispatch({
                        type: 'BLOGS_LOADED',
                        payload: res.data
                    })
                    return  res.data;
                }).catch(() => dispatch({
                    type: 'BLOGS_ERROR',
                }))
                return data;
        }
        
        // We will not use this from here because now, we have moved this method to server side...
        async function getBlog(id){
            const data = await axios.get("https://toppstation.com/api/blogs/" + id)
                .then(res => {
                    dispatch({
                        type: 'BLOG_LOADED',
                        payload: res.data
                    })
                    return  res.data;
                }).catch(() => dispatch({
                    type: 'BLOGS_ERROR',
                }))
                return data;
        }

        function clearError() {
            dispatch({
                type: 'CLEAR_ERROR',
            })
        }

        return ( <BlogContext.Provider value={{
                    blogs: state,
                    getBlogs,
                    getBlog,
                    clearError
                }}> { children } 
                </BlogContext.Provider>)
        }
