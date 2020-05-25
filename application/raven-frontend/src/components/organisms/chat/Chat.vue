<template>
    <section class="chatbox">
        <chat-header />
        <chat-messages />
        <chat-text-box class="chat-bottom" />
    </section>
</template>

<script>
import ChatHeader    from '@/components/molecules/chat/header/ChatHeader.vue';
import ChatMessages  from '@/components/molecules/chat/messages/ChatMessages.vue';
import ChatTextBox   from '@/components/molecules/chat/textbox/ChatTextBox.vue';

export default {
    name: 'chat',
    components: {
        ChatHeader,
        ChatMessages,
        ChatTextBox
    },
    mounted() {
        this.scrollToLastMessage()
    },
    methods: {
        scrollToLastMessage: function(){
            var messageBody = document.getElementsByClassName('messages-container')[0];
            messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
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

        display:flex;
        flex-direction: column;

        background-color: $chatBgColor;

        .chat-bottom {
            flex-shrink: 0;
            margin-bottom:10px;
        }

    }
</style>
