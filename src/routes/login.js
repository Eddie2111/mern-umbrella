import '../App.css';
import SimpleNav from '../components/Simplenav';
export default function Login() {
    // consider adding captcha here
    return (
        <>
        <SimpleNav/>
        <main style={{ padding: "1rem 0" }}>

        </main>
        <div class="container is-max-desktop">


        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                    <p class="title">Login</p>

                    <form action="/login" method="POST">
                    <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email"/>
                                <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password"/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <button class="button is-success">Login</button>
                    <button class="space" disabled>{"                              "}</button>
                    <button class="button is-danger"> forgot password? </button>
                </form>

                </article>
            </div>
        </div>

        </div>
        </>
    );
}