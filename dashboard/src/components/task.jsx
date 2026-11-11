

export default function Task({name, status}) {
  return (
    <li>
        <p>{status?"✅":"❌"} {name}</p>
    </li>
  )
}