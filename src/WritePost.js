import React from 'react';
//import CKEDITOR from 'react-ckeditor-component';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class WritePost extends React.Component
{
    componentDidMount(){
//        CKEDITOR.editorConfig=function(config){
//https://ckeditor.com/docs/ckeditor4/latest/guide/dev_webpack.html
        }
    
        render(){
            return(
                <div>
                   <CKEditor
                    editor={ClassicEditor}
                   
                   />

                </div>

            );

        }

}