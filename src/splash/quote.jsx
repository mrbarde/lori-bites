import React from 'react';

var Quote = ({body, author}) => {
    return (
        <div style={styles.quote}>
            <p style={styles.body}>{body}</p>
            <h5 style={styles.author}>{'- '+author}</h5>
        </div>
    );
};

const styles = {
    quote: {
        boxSizing: 'border-box',
		fontFamily: "'Lato', sans-serif",
        position: 'relative',
        float: 'none',
        clear: 'both',
        margin: '100px auto 10px auto',
        padding: '0px 20px',
        width: '480px',
        maxWidth: '100%'
    },
    body: {
        fontWeight: 300,
		fontSize: '1em',
		marginTop: '0px',
		marginBottom: '0px',
		textAlign: 'center',
		color: '#D1E1FE'
    },
    author: {
        fontWeight:600,
		fontSize: '1em',
		textAlign: 'center',
		marginTop: '10px',
		marginBottom: '0px',
		color: '#D1E1FE'
    }
};

export default Quote;