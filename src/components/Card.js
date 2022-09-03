import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardActionArea, makeStyles } from '@material-ui/core'
import { yellow, green, pink, blue } from '@material-ui/core/colors'




const useStyles = makeStyles({
  content: {
    marginTop: 30
  },
  name: {
    color: '#800000'
  },
  img: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: '60%'
  }
})

export default function NoteCard({ note }) {
  const classes = useStyles(note)

  return (
    <div>
      <Card elevation={3} sx={{ maxWidth: 250 }} className={classes.content}>
        <CardActionArea>
          <CardMedia
            className={classes.img}
            component="img"
            height="250"
            image={note.image}
            alt="Paella dish"
          />
          <CardContent >
            <Typography variant='h5' className={classes.name}>
              {note.title}
            </Typography>
            <Typography variant='h6' color='inherit'>
              {note.category}
            </Typography>
            <Typography >
              {note.company}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}