<template>
    <div>
        <figure>
            <img src="@/assets/user.png" alt="user">
        </figure>

        <div class="message-left-bubble">
            <p>{{text}}</p>
            <span class="message-bubble-tail"></span>
        </div>
    </div>

</template>

<script>
export default {
    name: 'chat-left-bubble',
    props: {
        username: String,
        text: String
    }
}
</script>

<style lang="scss" scoped>
    @import '@/components/atoms/colors/chat/chat.scss';
    @import '@/components/molecules/chat/bubbles/mixins.scss';

    div {
        display: flex;

        figure {
            margin:0;
            margin-right:15px;

            align-self: flex-end;

            img {
                width:25px;
                height: auto;
                border-radius:100%;
            }
        }
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
    }


</style>
