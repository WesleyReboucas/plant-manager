export type SchedulesProps = {
  schedules_plants: {
    id: string
    name: string
    image: string
    environments: string
    water_frequency: string
    fertilizer_frequency: string
  }
  handleRemove: () => void
}
