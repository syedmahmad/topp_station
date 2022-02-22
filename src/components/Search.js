import axios from 'axios'
import React, {
  useState,
  useReducer,
  useContext,
  useEffect,
  useCallback,
} from 'react'
import BlogReducer from '../reducers/BlogReducer'
// import { useRouteMatch, useHistory } from "react-router-dom";

import { BlogContext } from '../context/BlogState'
import data from '../Data/data'

const initialState = {
  blogs: null,
  error: null,
}

const Search = (props) => {
  const { getBlog, ...blogsState } = useContext(BlogContext)
  const [searchData, setSearchData] = useState(props?.search || '')
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [originalPosts, setOriginalPosts] = useState([])
  const [posts, setPosts] = useState([])
  const [sortBy, setSortBy] = useState('older')
  const [state, dispatch] = useReducer(BlogReducer, initialState)

  // let match = useRouteMatch("/search/:category");
  // let paramsCategory;
  // if(match && match.params.category){
  //   paramsCategory = match.params.category
  // }

  let paramsCategory
  if (props?.search) {
    paramsCategory = props?.search
  }

  useEffect( () => {
    (async () => {
      await axios
      .get('api/getblogs')
      .then(async (res) => {
        dispatch({
          type: 'BLOGS_LOADED',
          payload: res.data,
        })
        await setPosts(res.data)
        await setOriginalPosts(res.data)
      })
      .catch((err) => {
        console.log(err.message)
        dispatch({
          type: 'BLOGS_ERROR',
        })
      })
    var getValue = window.localStorage.getItem('searchInput')
    if (getValue != null) {
      setSearchInput(getValue)
      searchFunction(getValue)
      window.localStorage.removeItem('searchInput')
    }
    if (props?.search) {
      searchItems(props?.search)
      setSearchData(props?.search)
    }
    // if (match && match.params.category) {
    //   searchItems(match.params.category);
    //   setSearchData(match.params.category);
    // }
    })();
  }, [paramsCategory])

  // Filter posts
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    searchFunction(searchValue)
  }
  const searchArticle = () => {
    searchFunction(searchInput)
  }
  const searchFunction = (searchInput) => {
    if (searchInput !== '') {
      const filteredData = originalPosts?.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      console.log(filteredData, '///////filteredData')
      if (filteredData.length > 0) {
        setPosts(filteredData)
      }

      //setFilteredResults(filteredData);
    } else setPosts(originalPosts)
  }
  // Sort posts
  /** */
  function reverseArr(input) {
    let ret = new Array()
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i])
    }
    return ret
  }
  /**/
  const renderPosts = (event) => {
    const value = event.target.value.toLowerCase()
    if (sortBy === 'older' && value === 'older') {
    } else {
      setSortBy(value)
      let newPosts = reverseArr(posts)
      setPosts(newPosts)
    }
  }

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hours: 'numeric',
    minutes: 'numeric',
  }

  return (
    <>
      <section className="main-search">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
              <h3 className="h3">Kimbocorp Blog</h3>
            </div>
            <div className="col-12 col-sm-7 col-md-8 col-lg-9 col-xl-9 col-xxl-9 search-article-block">
              <input
                type="text"
                name="search"
                placeholder="search articles"
                value={searchInput}
                style={{
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                }}
                onChange={(e) => searchItems(e.target.value)}
              />
              <button type="submit" onClick={searchArticle}>
                <span>
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="search-results">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-6 search__main-heading-wrapper">
              <h2 className="h1 search__main-heading">
                Search Results
                {
                  // eslint-disable-next-line @next/next/no-img-element
               }<img
                  className="design"
                  src="/images/brown-underline.png"
                  alt=""
                />
              </h2>
            </div>
            <div className="col-6 text-end sort-menu">
              <label htmlFor="sort-input" className="sort-label">
                Sort By:
              </label>
              <select
                name="sort-input"
                id="sort-input"
                className="border-0 bg-transparent"
                onChange={renderPosts}
              >
                <option value="Older">Most Relevant</option>
                <option value="Latest">Latest</option>
                <option value="Older">Older</option>
              </select>
            </div>
          </div>
          <div className="row g-5">
            <h4>Results for: {searchData}</h4>
          </div>
          <div className="row g-5">
            <div className="col-12">
              <div className="tabs-outer-main">
                {posts?.map((blog, index) => {
                  return (
                    <div key={index} className="business-formation-outer mb-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="img-outer-tab-sec">
                            <a href={`/blog/${blog._id}`} title="">
                              {
                                // eslint-disable-next-line @next/next/no-img-element
                              }<img src={blog.image} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-md-8 post-short-data d-flex align-items-center">
                          <div className="tab-sec-txt-outer">
                            <h5 className="tab-sec-inner-heading">
                              {blog.title}
                            </h5>
                            <p className="tab-sec-main-paragraph pb-3 pt-0">
                              {blog.description}
                            </p>
                            <div className="row">
                              <div className="outer-date-sec">
                                <a href={`/blog/${blog._id}`}>
                                  <span className="info-sec-main">
                                    <span className="icn-main">
                                      {
                                        // eslint-disable-next-line @next/next/no-img-element
                                     }<img
                                        src="/images/clock.png"
                                        alt=""
                                        className="icn-image-clock-&-user"
                                      />
                                    </span>
                                    {new Date(
                                      blog.creationDate,
                                    ).toLocaleDateString('en-US', dateOptions)}
                                  </span>
                                </a>
                              </div>
                              <div className="outer-date-sec">
                                <a href={`/blog/${blog._id}`}>
                                  <span className="info-sec-main">
                                    <span className="icn-main">
                                      {
                                        // eslint-disable-next-line @next/next/no-img-element
                                     }<img
                                        src="/images/user.png"
                                        alt=""
                                        className="icn-image-clock-&-user"
                                      />
                                    </span>
                                    {blog.creator}
                                  </span>
                                </a>
                              </div>
                              <div className="categories">
                                {blog.tags.map((tag, index) => {
                                  return (
                                    <a href={`/search/${tag}`} key={index}>
                                      {tag}
                                    </a>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
