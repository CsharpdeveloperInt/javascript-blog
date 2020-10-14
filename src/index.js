import {HeaderComponent} from './component/header.component'
import {NavigationComponent} from './component/navigation.component'
import { CreateComponent } from './component/create.component';
import { PostsComponent } from './component/posts.component';
import { FavoriteComponent } from './component/favorite.component';
import { LoaderComponent } from './component/loader.component';


new HeaderComponent('header')
const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const posts = new PostsComponent('posts',{loader})
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite',{loader})

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite',component: favorite}
])