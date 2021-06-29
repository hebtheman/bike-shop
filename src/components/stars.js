import Rating from '@material-ui/lab/Rating'

export default function Stars({ 
  count, 
  size = 'small',
  readOnly = true
}) {
  const stars = count > 5 ? 5 : (count < 0 ? 0 : count)

  return (
    <div style={{ display: 'block', clear: 'both'}}>
      <Rating
        name="rating"
        precision={0.5}
        value={stars}
        style={{ color: '#ff523b' }}
        size={size}
        readOnly={readOnly}
      />
    </div>
  )
}