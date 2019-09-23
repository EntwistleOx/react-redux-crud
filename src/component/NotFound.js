import React from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card'

const NotFound = () => (
    <div>
        <Header />
        <section>
            <Card>
                <Card.Body>
                    <Card.Text>
                        NOT FOUND - 404
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    </div>
);

export default NotFound

