import Link from "next/link"

const PrimaryBtn = (props) => {
  return (
    <div className="primary-btn">
        <Link href='https://wa.me/message/27VORR2EOAGJL1'>
            <span>{props.text}</span>
        </Link>
    </div>
    
  )
}

export default PrimaryBtn