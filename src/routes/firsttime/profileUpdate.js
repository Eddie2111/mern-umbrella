import '../../App.css';
import SimpleNav from '../../components/Simplenav';
export default function ProfileUpdate() {
    return (
        <>
        <SimpleNav/>
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
      <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
    <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">SUCCESS!!</p>
        </article>

      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">SUCCESS!!</p>
        </article>

      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img alt="someprop" src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          
        </div>
      </div>
    </article>
  </div>
</div>

      </>
    );
  }