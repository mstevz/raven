import ChatLeftBubble  from '@/components/molecules/chat/bubbles/left/ChatLeftBubble.vue';
import ChatRightBubble from '@/components/molecules/chat/bubbles/right/ChatRightBubble.vue';

export default {
    name: 'chat-messages',
    components: {
        ChatLeftBubble,
        ChatRightBubble
    },
    data: function(){
        return {
            messages: [
                {id: 1, username:'johndoe', sender:'notme', value:'hello'},
                {id: 2, username:'janedoe', sender:'me', value:'hi!'},
                {id: 3, username:'janedoe', sender:'me', value:'how are you doing?'},
                {id: 4, username:'johndoe', sender:'notme', value:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            ]
        }
    }
}
