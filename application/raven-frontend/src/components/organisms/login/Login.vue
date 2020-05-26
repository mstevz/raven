<template>
    <section class="login-section">
        <form id="loginForm" action="index.html" method="post">

            <raven-logo />

            <div>
                <label for="">Username</label>
                <input type="text" name="" value="" />
            </div>

            <div>
                <label for="">Password</label>
                <input type="password" name="" value="" />
            </div>

        </form>

        <div id="buttonArea">
            <button type="button" name="button">Sign Up</button>
            <button type="button" name="button">Login</button>
        </div>
    </section>
</template>

<script>
import RavenLogo from '@/components/atoms/logos/raven/RavenLogo.vue';

export default {
    name: 'login',
    components: {
        RavenLogo
    }
}
</script>

<style lang="scss" scoped>
    .login-section{
        display:flex;
        flex-direction: column;

        height: 100vh;
        text-align: left;

        #loginForm {
            display:flex;
            flex-direction:column;

            flex:1;

            width:100%;

            align-items: center;
            justify-content: center;

            div {
                display:flex;
                flex-direction: column;

                margin-top:10px;

                width:80%;

                label {
                    text-align: left;
                }


                input[type="text"],
                input[type="password"]{

                    padding:8px;
                }
            }
        }

        #buttonArea {
            display:flex;
            flex-direction:row;

            max-height:35px;

            bottom:0;

            button {
                width: 100%;
                height:35px;
            }
        }
    }
</style>
