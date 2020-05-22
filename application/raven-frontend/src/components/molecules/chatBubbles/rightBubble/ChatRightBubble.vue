<template>
    <div class="message-right-bubble">
        <p>{{text}}</p>
        <span class="message-bubble-tail"></span>
    </div>
</template>

<script>
export default {
    name: 'chat-right-bubble',
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
    @import '@/components/atoms/colors/chat/chat.scss';
    @import '@/components/molecules/chatBubbles/mixins.scss';

    .message-right-bubble {

        @include messageBubble;

        border-bottom-right-radius: 0;
        background-color: $messageBubbleColor;

        .message-bubble-tail {
            @include messageBubbleTail;

            right:0;
            transform: translateX(100%);
            background-color: $messageBubbleColor;

            &:after {
                @include messageBubbleTailAfter;

                right:0;
                border-bottom-left-radius: 100%;
                background-color: $chatBgColor;
            }
        }

        p {
            text-align: justify;
        }

    }
</style>
