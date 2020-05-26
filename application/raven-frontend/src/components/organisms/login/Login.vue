<template>
    <section class="login-area">
        <div>
            <img src="@/assets/ravenlogo.svg" style="max-width:100px" alt="">

            <form id="loginForm" action="index.html" method="post">

                <label for="">Username</label>
                <input type="text" name="" value="" />

                <label for="">Password</label>
                <input type="password" name="" value="" />

                <button type="button" name="button">Login</button>

                <button type="button" name="button">Sign Up</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style lang="scss" scoped>
    .login-area {
        display:flex;
        flex-direction:column;

        height:100vh;
        width:100vw;

        background-color: #c1a57b;

        align-items: center;
        justify-content: center;

        div {
            width:100%;
            text-align: center;


            #loginForm {
                display: flex;
                flex-direction: column;

                text-align: left;

                padding:0px 20px;
                padding-bottom:50px;
                border-radius:10px;

                input[type="text"],
                input[type="password"],
                button{
                    padding:8px;
                    margin-top:5px;
                    margin-bottom:5px;
                }

                button {
                    background-color: #1a1a1a;
                    color: #fff;
                    border-style:none;
                    cursor:pointer;

                }
            }
        }

    }
</style>
