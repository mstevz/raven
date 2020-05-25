<template>
    <section class="messages-container" >
        <div v-for="message in messages" v-bind:key="message.id">
            <chat-left-bubble  v-if="message.sender != 'me'" :username="`${message.username}`" :text="`${message.value}`"/>
            <chat-right-bubble v-if="message.sender == 'me'" :text="`${message.value}`"/>
        </div>
    </section>
</template>

<script src="./chatMessages.js"></script>
<style src="./chatMessages.scss" lang="scss" scoped></style>
