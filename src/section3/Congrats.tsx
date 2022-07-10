/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props --- React props
 * @returns {JSX.Element}  -- Rendered component (or null if `success` props is faild)
 */

interface Props {
  success?: boolean
}
export default function Congrats({success}: Props) {
  return (
    <>
      <div data-test="component-congrats">
        {success && <div data-test="component-message">congrats</div>}
      </div>
    </>
  )
}
