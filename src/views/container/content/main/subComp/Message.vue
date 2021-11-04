<template>
    <div id="message">
        <message-list></message-list>
        <blank-content></blank-content>
    </div>
</template>

<script>
    import MessageList from 'views/container/content/main/subComp/subMessage/MessageList'
    // import MessageContent from 'views/container/content/menu/subComp/subMessage/MessageContent'
    import BlankContent from 'views/container/content/main/subComp/subMessage/BlankContent'
    export default {
        name: "Message",
        components: {
            MessageList,
            BlankContent
            // MessageContent
        }
    }
</script>

<style scoped>
    #message {
        display: flex;
        width: 990px;
        height: 530px;
    }
</style>