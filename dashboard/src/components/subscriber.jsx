

export default function Subscriber({isSubscribed}) {
  return (
    <h2>
    {isSubscribed ? "Thank you for your subscription" : "Subscribe today to get weekly updates along with random phishing links!"}
    </h2>
  )
}