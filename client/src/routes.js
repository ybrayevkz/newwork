import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from "./pages";
import {AuthorsPage} from "./pages/AuthorsPage";
import {ContactsPage} from "./pages/ContactsPage";
import {PolicyPage} from "./pages/PolicyPage";
import {AuthPage} from "./pages/AuthPage";
import {ProfilePage} from "./pages/ProfilePage";
import {AboutWebPage} from "./pages/AboutWebPage";
import {CertificationPage} from "./pages/CertificationPage";
import {AboutCoursesPage} from "./pages/AboutCoursesPage";
import {ActivationSuccessPage} from "./pages/ActivationSuccessPage";
import {useSelector} from "react-redux";
import {NotFoundPage} from "./pages/NotFoundPage";
import {ForgotPasswordPage} from "./pages/ForgotPasswordPage";
import {ResetPasswordPage} from "./pages/ResetPasswordPage";
import {HTML_home_page} from "./pages/Courses/HTML/HTML_home_page";
import {HTML_chapters_page} from "./pages/Courses/HTML/HTML_chapters";
import {HTML_is} from "./components/Courses/HTML_Course/HTML_is";
import {HTML_atributes} from "./components/Courses/HTML_Course/HTML_atributes";
import {HTML_backgroundimages} from "./components/Courses/HTML_Course/HTML_backgroundimages";
import {HTML_baseexercises} from "./components/Courses/HTML_Course/HTML_baseexercises";
import {HTML_blocks} from "./components/Courses/HTML_Course/HTML_blocks";
import {HTML_classatribute} from "./components/Courses/HTML_Course/HTML_classatribute";
import {HTML_code} from "./components/Courses/HTML_Course/HTML_code";
import {HTML_colspanrowspan} from "./components/Courses/HTML_Course/HTML_colspanrowspan";
import {HTML_comments} from "./components/Courses/HTML_Course/HTML_comments";
import {HTML_CSS} from "./components/Courses/HTML_Course/HTML_CSS";
import {HTML_elements} from "./components/Courses/HTML_Course/HTML_elements";
import {HTML_elementsmethods} from "./components/Courses/HTML_Course/HTML_elementsmethods";
import {HTML_events} from "./components/Courses/HTML_Course/HTML_events";
import {HTML_favicon} from "./components/Courses/HTML_Course/HTML_favicon";
import {HTML_forms} from "./components/Courses/HTML_Course/HTML_forms";
import {HTML_idattribute} from "./components/Courses/HTML_Course/HTML_idattribute";
import {HTML_imagesmap} from "./components/Courses/HTML_Course/HTML_imagesmap";
import {HTML_javascript} from "./components/Courses/HTML_Course/HTML_javascript";
import {HTML_linkbookmarks} from "./components/Courses/HTML_Course/HTML_linkbookmarks";
import {HTML_linkcolor} from "./components/Courses/HTML_Course/HTML_linkcolor";
import {HTML_mainelements} from "./components/Courses/HTML_Course/HTML_mainelements";
import {HTML_manstyle} from "./components/Courses/HTML_Course/HTML_manstyle";
import {HTML_meeting} from "./components/Courses/HTML_Course/HTML_meeting";
import {HTML_otherlists} from "./components/Courses/HTML_Course/HTML_otherlists";
import {HTML_paragraphs} from "./components/Courses/HTML_Course/HTML_paragraphs";
import {HTML_pictureelement} from "./components/Courses/HTML_Course/HTML_pictureelement";
import {HTML_quotations} from "./components/Courses/HTML_Course/HTML_quotations";
import {HTML_redactors} from "./components/Courses/HTML_Course/HTML_redactors";
import {HTML_responsive} from "./components/Courses/HTML_Course/HTML_responsive";
import {HTML_rgba} from "./components/Courses/HTML_Course/HTML_rgba";
import {HTML_semantics} from "./components/Courses/HTML_Course/HTML_semantics";
import {HTML_styles} from "./components/Courses/HTML_Course/HTML_styles";
import {HTML_symbols} from "./components/Courses/HTML_Course/HTML_symbols";
import {HTML_tableborders} from "./components/Courses/HTML_Course/HTML_tableborders";
import {HTML_tablecolgroup} from "./components/Courses/HTML_Course/HTML_tablecolgroup";
import {HTML_tablemargin} from "./components/Courses/HTML_Course/HTML_tablemargin";
import {HTML_tables} from "./components/Courses/HTML_Course/HTML_tables";
import {HTML_tablesize} from "./components/Courses/HTML_Course/HTML_tablesize";
import {HTML_tablestyle} from "./components/Courses/HTML_Course/HTML_tablestyle";
import {HTML_tabletitle} from "./components/Courses/HTML_Course/HTML_tabletitle";
import {HTML_textformat} from "./components/Courses/HTML_Course/HTML_textformat";
import {HTML_colors} from "./components/Courses/HTML_Course/HTML_colors";
import {HTML_frames} from "./components/Courses/HTML_Course/HTML_frames";
import {HTML_headers} from "./components/Courses/HTML_Course/HTML_headers";
import {HTML_hex} from "./components/Courses/HTML_Course/HTML_hex";
import {HTML_hsla} from "./components/Courses/HTML_Course/HTML_hsla";
import {HTML_images} from "./components/Courses/HTML_Course/HTML_images";
import {HTML_links} from "./components/Courses/HTML_Course/HTML_links";
import {HTML_lists} from "./components/Courses/HTML_Course/HTML_lists";
import {HTML_olists} from "./components/Courses/HTML_Course/HTML_olists";
import {HTML_ulists} from "./components/Courses/HTML_Course/HTML_ulists";
import {HTML_filepaths} from "./components/Courses/HTML_Course/HTML_filepaths";
export const useRoutes = isAuthenticated =>{
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth;
    return(
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/authors' element={<AuthorsPage />} exact />
            <Route path='/contacts' element={<ContactsPage />} exact />
            <Route path='/policy' element={<PolicyPage />} exact />
            <Route path='/profile' element={isLogged ? <ProfilePage /> : <NotFoundPage />} />
            <Route path='/aboutweb' element={<AboutWebPage />} />
            <Route path='/certification' element={<CertificationPage />} />
            <Route path='/aboutcourses' element={<AboutCoursesPage />} />
            <Route path='/auth/forgot_password' element={isLogged ? <NotFoundPage /> : <ForgotPasswordPage />} />
            <Route path='/auth/forgot_password/reset_password/:token' element={isLogged ? <NotFoundPage /> : <ResetPasswordPage  />} />
            {/*<Route path="*" element={<Navigate to="/profile/:id" />} />*/}
            <Route path='/auth' element={isLogged ? <NotFoundPage /> : <AuthPage />} exact />
            <Route path='/user/activate/:activation_token' element={<ActivationSuccessPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/aboutcourses/html_course_home' element={isLogged ?  <HTML_home_page /> : <NotFoundPage />} />
            <Route path='/aboutcourses/html_chapters' element={<HTML_chapters_page />} />
            <Route path='/aboutcourses/html_chapters/html_is' element={<HTML_is />} />
            <Route path='/aboutcourses/html_chapters/html_atributes' element={<HTML_atributes />} />
            <Route path='/aboutcourses/html_chapters/html_backgroundimages' element={<HTML_backgroundimages />} />
            <Route path='/aboutcourses/html_chapters/html_baseexercises' element={<HTML_baseexercises />} />
            <Route path='/aboutcourses/html_chapters/html_blocks' element={<HTML_blocks />} />
            <Route path='/aboutcourses/html_chapters/html_classattribute' element={<HTML_classatribute />} />
            <Route path='/aboutcourses/html_chapters/html_code' element={<HTML_code />} />
            <Route path='/aboutcourses/html_chapters/html_colors' element={<HTML_colors />} />
            <Route path='/aboutcourses/html_chapters/html_colrowspan' element={<HTML_colspanrowspan />} />
            <Route path='/aboutcourses/html_chapters/html_comments' element={<HTML_comments />} />
            <Route path='/aboutcourses/html_chapters/html_CSS' element={<HTML_CSS />} />
            <Route path='/aboutcourses/html_chapters/html_elements' element={<HTML_elements />} />
            <Route path='/aboutcourses/html_chapters/html_elementsmethods' element={<HTML_elementsmethods />} />
            <Route path='/aboutcourses/html_chapters/html_events' element={<HTML_events />} />
            <Route path='/aboutcourses/html_chapters/html_favicon' element={<HTML_favicon />} />
            <Route path='/aboutcourses/html_chapters/html_forms' element={<HTML_forms />} />
            <Route path='/aboutcourses/html_chapters/html_filepaths' element={<HTML_filepaths />} />
            <Route path='/aboutcourses/html_chapters/html_iframes' element={<HTML_frames />} />
            <Route path='/aboutcourses/html_chapters/html_headers' element={<HTML_headers />} />
            <Route path='/aboutcourses/html_chapters/html_hex' element={<HTML_hex />} />
            <Route path='/aboutcourses/html_chapters/html_hsla' element={<HTML_hsla />} />
            <Route path='/aboutcourses/html_chapters/html_idattribute' element={<HTML_idattribute />} />
            <Route path='/aboutcourses/html_chapters/html_images' element={<HTML_images />} />
            <Route path='/aboutcourses/html_chapters/html_imagesmap' element={<HTML_imagesmap />} />
            <Route path='/aboutcourses/html_chapters/html_javascript' element={<HTML_javascript />} />
            <Route path='/aboutcourses/html_chapters/html_linkbookmarks' element={<HTML_linkbookmarks />} />
            <Route path='/aboutcourses/html_chapters/html_linkcolor' element={<HTML_linkcolor />} />
            <Route path='/aboutcourses/html_chapters/html_links' element={<HTML_links />} />
            <Route path='/aboutcourses/html_chapters/html_lists' element={<HTML_lists />} />
            <Route path='/aboutcourses/html_chapters/html_mainelements' element={<HTML_mainelements />} />
            <Route path='/aboutcourses/html_chapters/html_manstyle' element={<HTML_manstyle />} />
            <Route path='/aboutcourses/html_chapters/html_meeting' element={<HTML_meeting />} />
            <Route path='/aboutcourses/html_chapters/html_olists' element={<HTML_olists />} />
            <Route path='/aboutcourses/html_chapters/html_otherlists' element={<HTML_otherlists />} />
            <Route path='/aboutcourses/html_chapters/html_paragraphs' element={<HTML_paragraphs />} />
            <Route path='/aboutcourses/html_chapters/html_picturelements' element={<HTML_pictureelement />} />
            <Route path='/aboutcourses/html_chapters/html_quotations' element={<HTML_quotations />} />
            <Route path='/aboutcourses/html_chapters/html_redactors' element={<HTML_redactors />} />
            <Route path='/aboutcourses/html_chapters/html_responsive' element={<HTML_responsive />} />
            <Route path='/aboutcourses/html_chapters/html_rgba' element={<HTML_rgba />} />
            <Route path='/aboutcourses/html_chapters/html_semantics' element={<HTML_semantics />} />
            <Route path='/aboutcourses/html_chapters/html_styles' element={<HTML_styles />} />
            <Route path='/aboutcourses/html_chapters/html_symbols' element={<HTML_symbols />} />
            <Route path='/aboutcourses/html_chapters/html_tableborders' element={<HTML_tableborders />} />
            <Route path='/aboutcourses/html_chapters/html_tablecolgroup' element={<HTML_tablecolgroup />} />
            <Route path='/aboutcourses/html_chapters/html_tablemargin' element={<HTML_tablemargin />} />
            <Route path='/aboutcourses/html_chapters/html_tables' element={<HTML_tables />} />
            <Route path='/aboutcourses/html_chapters/html_tablesize' element={<HTML_tablesize />} />
            <Route path='/aboutcourses/html_chapters/html_tablestyle' element={<HTML_tablestyle />} />
            <Route path='/aboutcourses/html_chapters/html_tabletitle' element={<HTML_tabletitle />} />
            <Route path='/aboutcourses/html_chapters/html_textformat' element={<HTML_textformat />} />
            <Route path='/aboutcourses/html_chapters/html_ulists' element={<HTML_ulists />} />

        </Routes>
    )
}