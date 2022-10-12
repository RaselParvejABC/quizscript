import React from 'react';

export const QuestionsContext = React.createContext();

const QuestionsContextProvider = ({children, value}) => {
    return (
        <QuestionsContext.Provider value={value}>
            {children}
        </QuestionsContext.Provider>
    );
};

export default QuestionsContextProvider;