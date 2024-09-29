import random

# List of greeting slogans
slogans = [
    "Perfect gifts, just a chat away!",
    "We take the guesswork out of gifting!",
    "From chat to checkout – gifting made easy!",
    "The chatbot that knows the perfect gift!",
    "Chat, pick, and surprise – gifting simplified!",
    "Say goodbye to bad gifts – we've got your back!",
    "Finding gifts shouldn’t be harder than wrapping them!",
    "Gifts that speak louder than words – we’ll help you find them!",
    "Chat with us and find your gift match!",
    "Your gifting genie is just a conversation away!",
    "No stress, just gifts – let’s get chatting!",
    "Gifts for every occasion, just ask our chatbot!",
    "We gift you the gift of not overthinking!",
    "Your gift-giving superhero in the form of a chatbot!",
    "Perfect gifts? Let’s talk about it!",
    "From clueless to gifting genius – one chat at a time!",
    "The easiest gift you'll ever give starts with a chat!",
    "Gifts that’ll wow – without the 'how?!'",
    "A chatbot with a gift for… gifting!",
    "Making gifting easy – one chat at a time!",
    "Give like a pro with a little AI help!",
    "No gift idea? No problem – let's chat!",
    "Your shortcut to gifting perfection!",
    "Forget the guesswork, we’ve got the gifts!",
    "Chat. Choose. Deliver – gifting made smart!",
    "Gifting gurus at your fingertips!",
    "We make gifting smarter, not harder!",
    "Chat your way to the perfect gift!",
    "Unlock the perfect gift – no magic required!",
    "Too many choices? Let us guide you to the perfect one!",
    "Great gifts start with great conversations!",
    "Chat with us – we’ve got all the right gift ideas!",
    "We gift-wrap your gifting dilemmas!",
    "Don’t stress, just impress – with our gifting chat!",
    "We’re the chatty friend who always knows the perfect gift!",
    "Gifts made easy – just say the word!",
    "Chat, click, gift – couldn’t be simpler!",
    "When in doubt, chat it out – and we’ll help you gift!",
    "Turning gift-giving stress into a delightful success!",
    "Chat-powered gifts that wow!",
    "The chatbot that’s always full of great gift ideas!",
    "Talk to us – we’re your gift whisperers!",
    "Never give a boring gift again!",
    "Stop searching – start chatting for the perfect gift!",
    "The only chat you need for great gifts!",
    "Chat your way to gifting glory!",
    "Where gifting genius meets chatbot convenience!",
    "We know the gift that’ll make them smile!",
    "Stuck on what to buy? We’ll chat you through it!",
    "Chat your way to becoming a gift-giving legend!"
]

# Function to randomly select a greeting
def get_random_greeting():
    return random.choice(slogans)

# Example usage
random_greeting = get_random_greeting()
print(random_greeting)
