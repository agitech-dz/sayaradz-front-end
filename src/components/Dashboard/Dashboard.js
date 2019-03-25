import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Tableau de bord" />
        <CardContent>Bienvenue sur le tableau de bord</CardContent>
    </Card>
);
