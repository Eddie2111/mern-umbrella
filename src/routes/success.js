import '../App.css';
import React,{ useState } from 'react';
import SimpleNav from '../components/Simplenav';
export default function Success() {
  const [selectedImage, setSelectedImage] = useState(null);
  const submittedForm = (e) => {
    e.preventDefault();
    console.log(e.target.image.value);
  }
    return (
        <>
        <SimpleNav/>
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
      <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
    <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Vertical...</p>
          <p className="subtitle">SUCCESS!!</p>
        </article>

      </div>
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Vertical...</p>
          <p className="subtitle">SUCCESS!!</p>
        </article>

      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img alt="someprop" src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <form onSubmit={submittedForm}>
        <input name="image" type="file"/>
        <button type="submit">Submit</button>
        </form>
        <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not found" width={"150px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
    
        <div className="content">
          
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
          
        </div>
      </div>
    </article>
  </div>
</div>

      </>
    );
  }