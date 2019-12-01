import React from 'react';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';

export default function Job({job}) {

    return (
        <div className="job">
            <Container>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="align-self-start mr-3"
                        src={job.company_logo}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5 className="title">{job.title}</h5>
                        <p>
                            {job.company}
                        </p>
                    </Media.Body>
                    <small>{job.created_at.split(' ').slice(0,3).join(' ')}</small>
                </Media>
            </Container>
            
        </div>
    )
}