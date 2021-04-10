import {useRef,useState,useEffect} from 'react'
import firebase from '../firebase'
import FileUploader from "react-firebase-file-uploader";
const PdfViewer = () => {
    const pdfRef= useRef()
    const inRef= useRef()
    const [website,setWebsite] = useState('');
    useEffect(()=>{
        let pdf_url= localStorage.getItem('edunation_pdf_url');
        pdf_url?setWebsite(pdf_url):setWebsite('')
    },[])
    const viewPdf =(filename)=>{
    firebase
    .storage()
    .ref("application/pdf")
    .child(filename)
    .getDownloadURL()
    .then(url =>{ 
        localStorage.setItem('edunation_pdf_url',url);
        setWebsite(url)
    });
    }
    return (
        <div className="pdf_container">
            <div className="pdf_submit">
            <FileUploader
            accept="application/pdf/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("application/pdf")}
            onUploadSuccess={viewPdf}
          />
            </div>
            <embed
                ref={pdfRef}
                src={website}
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                width="100%"
                height="93%"
            ></embed>
        </div>

    );
}

export default PdfViewer;