import React from 'react'
import "./App.css";
// import SliderComments from "../../../components/SliderComments/App";
import { useTranslation } from 'react-i18next';
import  { useEffect, useRef } from 'react';
const Comments = () => {
    const scrollRef = useRef(null);
      useEffect(() => {
    if (scrollRef.current) {
      // Element balandligining yarmiga skroll qilish
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight / 2 - scrollRef.current.clientHeight / 2;
    }
  }, [])
    const {t}=useTranslation();
  return (
      <div className="comments">
          <div className="comments_container">
              <div className="comments_left">
                    {/* <SliderComments></SliderComments> */}
                    <ul ref={scrollRef} className='comment_left_list'>
                        <div className='comment_left_list_item_left'>
                            <div className='box_top'></div>
                            <div className='box_bottom'></div>
                            <div className='box_bottom'></div>
                            <div className='box_bottom'></div>
                        </div>
                        <div className='comment_left_list_item_right'>
                            <div className='box_top'></div>
                            <div className='box_bottom'></div>
                            <div className='box_bottom'></div>
                            <div className='box_bottom'></div>
                        </div>
                    </ul>
              </div>
              <div className="comments_right">
                  <div>
                      <h2 className="comments_title">
                          {t('comments_title')}
                      </h2>
                      <p className="comments_text">
                          {t('comments_text')}
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Comments
