// Copyright 2019 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import style from './style.less';
import { IconConfigure, IconPlusTransparent } from '../common/icons';
import { LetterAvatar } from '../common';
import Topbar from '../topbar';
import { SideMenu, SideMenuItem, SideMenuHeader, SideMenuFooter } from '../sideMenu';
import ProjectList from '../organization/projectList';
import { Redirect } from 'react-router';
import OnlyIf from '../common/onlyIf';

interface IProps {
    githubLoginAction: () => void;
    isProjectListLoading: boolean;
}

export default class Dashboard extends Component<IProps> {

    // TODO - Make sure to change the hardcoded organization Ids and list for the real deal
    render() {
        const organizations = [
            {
                name: 'Organization numero uno',
            },
            {
                name: 'Galactic Republic ™'
            }
        ];

        return (
            <div className={style.dashboard}>
                <Topbar />
                <div className={style.content}>
                    <SideMenu>
                        <SideMenuHeader title='My organizations' />
                        {/* TODO: Remove placeholder items and fetch organizations instead, add corresponding link */}
                        <SideMenuItem
                            icon={<LetterAvatar title='Placeholder'/>}
                            title='Placeholder organization'
                            linkTo='TODO'
                        />
                        <SideMenuFooter>
                            <SideMenuItem
                                icon={<IconPlusTransparent />}
                                title='New organization'
                                linkTo='/new-organization'
                            />
                            {/* TODO: Add :organizationId to linkTo */}
                            <SideMenuItem
                                icon={<IconConfigure />}
                                title='Organization settings'
                                linkTo='12334/settings/details'
                            />
                        </SideMenuFooter>
                    </SideMenu>
                    <ProjectList
                        organizationName={'Placeholder organization'}
                        organizationId={'12334'}
                    />
                    <OnlyIf test={!organizations.length}>
                        <Redirect to={'/welcome'} />
                    </OnlyIf>
                </div>
            </div>
        );
    }
}
