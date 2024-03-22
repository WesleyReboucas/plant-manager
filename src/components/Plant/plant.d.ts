export type PlantProps = {
  id: string
  name: string
  about: string
  fertilizer_tips: string
  water_tips: string
  image: string
  environments: string
  water_frequency: {
    times: number
    repeat_every: string
  }
  fertilizer_frequency: {
    times: number
    repeat_every: string
  }
}
