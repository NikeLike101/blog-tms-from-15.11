import React from "react";
import PageContentWrapper from "../../components/page";
import Blog from "../../modules/blog";

const BlogPage:React.FC = () => {


    return <PageContentWrapper title={'Blog'}>
        <Blog/>
    </PageContentWrapper>
}

export default BlogPage