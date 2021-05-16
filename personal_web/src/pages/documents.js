import './documents.css';
import Iframe from 'react-iframe'
import my_cv from './JoshuaArcher_CV_2021.pdf'
const Documents = () => {
    return (
        <div> 
            
            <div className="documents-main">
                
                <iframe src={my_cv} title="title" width="1050" height="1000">
                    Presss me: <a href={my_cv}>Download PDF</a>
                </iframe>
            </div>
        </div>
    );
}
export default Documents;