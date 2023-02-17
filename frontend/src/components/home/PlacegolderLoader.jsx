import React from 'react'
import { Grid, Placeholder, Segment } from 'semantic-ui-react'

const PlaceholderExampleGrid = () => (
    <Grid columns={5} row={2} stackable>
        <Grid.Column>
            <Segment raised>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length='medium' />
                        <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
        </Grid.Column>

        
    </Grid>
)

export default PlaceholderExampleGrid