import { useState, useEffect } from "react";

import Card from "../../components/Card";
import Button from "../../components/Button";
import { getPosts } from "../../helpers/sendRequest";
import { createPages } from "./createPages";
import "./Blog.scss"

const Blog = () => {

    const imgPerPage = () => {
        if (window.screen.width >= 1400) {
          return 10;
        } else if (window.screen.width >= 960 && window.screen.width < 1400) {
          return 8;
        } else if (window.screen.width < 960 && window.screen.width >= 480) {
          return 6;
        } else if (window.screen.width < 480) {
            return 4;
        };
    }

    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(imgPerPage())
    const [currentPage, setCurrentPage] = useState(1);
    
    const pages =[];
    createPages(pages, totalPages, currentPage)

    useEffect(() => {setItemsPerPage(imgPerPage())},[])
    
    useEffect(() => {
        getPosts(currentPage,itemsPerPage)
        .then(result => {setPosts(result.data); setTotalPages(result.last_page)})
    }, [currentPage, itemsPerPage]);
    
    
      
    return(
        <div className="blog-page">
            <div className="blog-wrapper container">
                <h1 className="page-title">Blog</h1>
                <div className="blog-wrapper__items">
                    {posts && posts.map((item) => (
                        <Card post={item} key={item.id}/>
                        ))}
                </div>
                <div className="pages">
                    {currentPage > 1 && 
                    <Button text={window.screen.width >= 480 ? " Vorige pagina" : " "} 
                        className={"pages__switcher"} 
                        id={"prev_btn"} 
                        onClick={()=>setCurrentPage(currentPage-1)}/>}
                    {pages.map((page, index) => 
                        <span
                            key={index}
                            className={currentPage === page ? "current-page" : "page"}
                            onClick={() => setCurrentPage(page)}>
                                {page}
                        </span>)}
                    {currentPage < totalPages &&
                    <Button text={window.screen.width >= 480 ? "Volgende pagina " : " "} 
                        className={"pages__switcher"} 
                        id={"next_btn"} 
                        onClick={()=>setCurrentPage(currentPage+1)}/>}

                </div>
            </div>
        </div>
    )
}
export default Blog