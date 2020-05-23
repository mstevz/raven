<template>
    <section class="chatbox">
        <div class="messages-container" >
            <div v-for="message in messages" v-bind:key="message.id">
                <chat-left-bubble  v-if="message.sender != 'me'" :username="`${message.username}`" :text="`${message.value}`"/>
                <chat-right-bubble v-if="message.sender == 'me'" :text="`${message.value}`"/>
            </div>
        </div>

        <chat-textbox />
    </section>
</template>

<script>
import ChatLeftBubble  from '@/components/molecules/chat/bubbles/left/ChatLeftBubble.vue';
import ChatRightBubble from '@/components/molecules/chat/bubbles/right/ChatRightBubble.vue';
import ChatTextbox     from '@/components/molecules/chat/textbox/ChatTextbox.vue';

export default {
    name: 'chat',
    components: {
        ChatLeftBubble,
        ChatRightBubble,
        ChatTextbox
    },
    mounted() {
        this.scrollToLastMessage()
    },
    methods: {
        scrollToLastMessage: function(){
            var messageBody = document.getElementsByClassName('messages-container')[0];
            messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
        }
    },
    data: function(){
        return {
            messages: [
                {id: 1, username:'johndoe', sender:'notme', value:'hello'},
                {id: 2, username:'janedoe', sender:'me', value:'hi!'},
                {id: 3, username:'janedoe', sender:'me', value:'how are you doing?'}
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
    @import '@/components/atoms/colors/chat/chat.scss';

    .chatbox {

        position: relative;
        width: 100%;
        height:100vh;

        background-color: $chatBgColor;

        .messages-container {

            height:90%;
             /* needs vendor prefixes */
            display:flex;

            flex-direction: column;

            padding:10px;
            padding-left:15px;
            padding-right:15px;

            overflow-y: auto;

            /*div {
                display:flex;

                &:nth-child(1){
                    align-items: flex-end;
                }
            } */

        }

        &:nth-child(2) {
            position:absolute;
            bottom:0;
        }


    }
</style>
