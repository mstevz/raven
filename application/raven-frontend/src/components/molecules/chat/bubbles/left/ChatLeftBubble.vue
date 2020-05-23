<template>
    <div class="message-left-bubble">
        <p>{{text}}</p>
        <span class="message-bubble-tail"></span>
    </div>
</template>

<script>
export default {
    name: 'chat-left-bubble',
    props: {
        text: String
    }
}
</script>

<style lang="scss" scoped>
    @import '@/components/atoms/colors/chat/chat.scss';
    @import '@/components/molecules/chat/bubbles/mixins.scss';

    .message-left-bubble {

        @include messageBubble;

        border-bottom-left-radius: 0;
        background-color: $messageBubbleColor;

        .message-bubble-tail {
            @include messageBubbleTail;

            left:0;
            transform: translateX(-100%);
            background-color: $messageBubbleColor;

            &:after {
                @include messageBubbleTailAfter;

                border-bottom-right-radius: 100%;
                background-color: $chatBgColor;
            }
        }

        p {
            text-align: justify;
        }
    }
</style>
