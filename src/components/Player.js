
import Card from 'react-bootstrap/Card';





function Player({ name, team, nationality, jerseyNumber, age, image }){
  console.log(name)
   return(
<div>
<Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={image} alt='hello' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Team:</strong> {team} <br />
            <strong>Nationality:</strong> {nationality} <br />
            <strong>Jersey Number:</strong> {jerseyNumber} <br />
            <strong>Age:</strong> {age} <br />
          </Card.Text>
        </Card.Body>
      </Card>
</div>

   )
}

export default Player




