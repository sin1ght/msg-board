import React, { Component } from 'react';
import '../css/AboutPage.scss'


class AboutPage extends Component {
    render(){
        return (
            <div className="about-page">
                <header>关于</header>
                <div className="userinfo">
                    <div className="avatar"></div>
                    <p><span><i className="fa fa-user"></i> NickName</span> : Sinight</p>
                    <p><span><i className="fa fa-send"></i> Email</span> : sin1ght@qq.com</p>
                    <p><span><i className="fa fa-github-alt"></i> Github</span> : https://github.com/sin1ght</p>
                    <p><span><i className="fa fa-desktop"></i> Blog</span> : https://www.sinight.site</p>
                </div>
            </div>
        );
    }
}

export default AboutPage;